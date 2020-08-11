export class LoggingService {
    getStatusChange(status: string) {
        console.log('A server status changed. New Status: ' + status);
    }
}