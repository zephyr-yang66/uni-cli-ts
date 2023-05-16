interface IConfig {
  whiteAPIList: string[];
  baseUrl: string;
  base: {
    header: object;
    timeout: number;
  };
}
export const config: IConfig = {
  whiteAPIList: [],
  baseUrl: '',
  base: {
    header: {},
    timeout: 3000,
  },
};
