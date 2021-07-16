import "tailwindcss/tailwind.css";
import App from "next/app";
import Cookie from "js-cookie";
import fetch from "isomorphic-fetch";
import AppContext from "../context/AppContext";

class MyApp extends App {
  state = {
    user: null,
    isLoading: false,
  };

  componentDidMount() {
    const token = Cookie.get("token");

    if (token) {
      // authenticate the token on the server and place set user object
      fetch("https://cms.apiblic.com/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        // if res comes back not valid, token is not valid
        // delete the token and log the user out on client
        if (!res.ok) {
          Cookie.remove("token");
          this.setState({ user: null });
          return null;
        }
        const user = await res.json();
        this.setUser(user);
      });
    }

    if (!token) {
      this.setIsLoading(true);
    }
  }

  setUser = (user) => {
    this.setState({ user });
  };

  setIsLoading = (isLoading) => {
    this.setState({ isLoading });
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppContext.Provider
        value={{
          user: this.state.user,
          isLoading: this.state.isLoading,
          isAuthenticated: !!this.state.user,
          setUser: this.setUser,
          setIsLoading: this.setIsLoading,
        }}
      >
        <Component {...pageProps} />
      </AppContext.Provider>
    );
  }
}

export default MyApp;
