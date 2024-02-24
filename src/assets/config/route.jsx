import Layout from "../component/tampelates/Layout";
import Home from "../component/pages/Home";
import Discover from "../component/pages/Discover";
import Awards from "../component/pages/Awards";
import Celebrities from "../component/pages/Celebrities";
import Recent from "../component/pages/Recent";
import TopRate from "../component/pages/TopRate";
import Downloaded from "../component/pages/Downloaded";
import Playlists from "../component/pages/Playlists";
import Watchlist from "../component/pages/Watchlist";
import Completed from "../component/pages/Completed";
import Settings from "../component/pages/Settings";
import LogOut from "../component/pages/LogOut";

export const routeItems = [
  {
    url: "/logout",
    element: (
      <Layout>
        <LogOut />
      </Layout>
    ),
  },
  {
    url: "/settings",
    element: (
      <Layout>
        <Settings />
      </Layout>
    ),
  },
  {
    url: "/completed",
    element: (
      <Layout>
        <Completed />
      </Layout>
    ),
  },
  {
    url: "/watchlist",
    element: (
      <Layout>
        <Watchlist />
      </Layout>
    ),
  },
  {
    url: "/Playlists",
    element: (
      <Layout>
        <Playlists />
      </Layout>
    ),
  },
  {
    url: "/downloaded",
    element: (
      <Layout>
        <Downloaded />
      </Layout>
    ),
  },
  {
    url: "/toprate",
    element: (
      <Layout>
        <TopRate />
      </Layout>
    ),
  },
  {
    url: "/recent",
    element: (
      <Layout>
        <Recent />
      </Layout>
    ),
  },
  {
    url: "/home",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    url: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    url: "/discover",
    element: (
      <Layout>
        <Discover />
      </Layout>
    ),
  },
  {
    url: "/awards",
    element: (
      <Layout>
        <Awards />
      </Layout>
    ),
  },
  {
    url: "/celebrities",
    element: (
      <Layout>
        <Celebrities />
      </Layout>
    ),
  },
];
