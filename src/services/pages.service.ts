class PagesService {
    public readonly home: string = "/";
    public readonly logout: string = "/logout";
    public readonly login: string = "/login";
    public readonly register: string = "/register";
}

export const pagesService = new PagesService();