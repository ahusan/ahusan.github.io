import { Header } from './Header';

const meta = {
  component: Header,
};

export default meta;

export const Default = {
  args: {
    user: {},
    onLogin: () => {},
    onLogout: () => {},
    onCreateAccount: () => {}
  }
};