import { EventBus } from './EventBus';

export enum SocketEvent {
  Message = 'message',
  Close = 'close',
}

export class WebSocketClient extends EventBus {
  private socket: WebSocket | null = null;

  private pingInterval: number | undefined = undefined;

  constructor(private url: string) {
    super();
  }

  public connect(): Promise<void> {
    this.socket = new WebSocket(this.url);

    this.subscribe(this.socket);

    return new Promise<void>((resolve, reject) => {
      this.socket!.addEventListener('open', () => {
        this.setupPingPong();
        resolve();
      });
      this.socket!.addEventListener('close', reject);
    });
  }

  public send(data: unknown): void {
    if (!this.socket) {
      throw new Error('Websocket connection is not establish yet');
    } else {
      this.socket.send(JSON.stringify(data));
    }
  }

  public close(): void {
    clearInterval(this.pingInterval);
    this.socket?.close();
  }

  private setupPingPong(): void {
    this.pingInterval = window.setInterval(() => {
      this.send({ type: 'ping' });
    }, 5000);
  }

  private subscribe(socket: WebSocket): void {
    socket.addEventListener('message', (message) => {
      let data: any = '';
      try {
        data = JSON.parse(message.data);
      } catch (e) {
        throw new Error(`Error: ${e},`);
      }

      if (data?.type === 'pong') {
        return;
      }
      this.emit(SocketEvent.Message, data);
    });

    socket.addEventListener('close', () => {
      this.emit(SocketEvent.Close);
    });
  }
}
