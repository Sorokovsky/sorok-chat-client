class PagesService {
    private readonly auth: string = "/auth";
    public readonly register: string = `${this.auth}/register`;
    public readonly login: string = `${this.auth}/login`;
    public readonly logout: string = `${this.auth}/logout`;
}
export const pagesService = new PagesService();