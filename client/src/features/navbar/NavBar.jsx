import React, { useContext } from "react";
import { Menu, Container, Dropdown, Button } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { NavLink, Link } from "react-router-dom";
import { RootStoreContext } from "../../app/stores/rootStore";
import { useState } from "react";

const NavBar = () => {
  const rootStore = useContext(RootStoreContext);
  const { user, logout } = rootStore.userStore;

  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Menu fixed="top" inverted size="huge" pointing secondary>
      <Container>
        <Menu.Item
          header
          as={NavLink}
          exact
          to="/"
          active={activeItem === "home"}
          name="home"
          onClick={handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/wordbank"
          active={activeItem === "wordbank"}
          name="wordbank"
          onClick={handleItemClick}
        >
          Bank
        </Menu.Item>
        {user && (
          <Menu.Item position="right">
            <Dropdown pointing="top left" text={user.displayName}>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to={`/profile/${user.username}`}
                  text="My profile"
                  icon="user"
                />
                <Dropdown.Item onClick={logout} text="Logout" icon="power" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        )}
        <Menu.Item position="right">
          <Button as="a" inverted color="teal">
            Log in
          </Button>
          <Button as="a" style={{ marginLeft: "0.5em" }} inverted color="teal">
            Sign Up
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
