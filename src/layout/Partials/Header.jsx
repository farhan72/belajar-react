import { Grid, Input, Menu } from "semantic-ui-react";

const Header = () => {
  return (
    <Grid padded className="tablet computer only">
      <Menu borderless inverted fluid fixed="top">
        <Menu.Item header as="a">
          Project name
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input placeholder="Search..." size="small" />
          </Menu.Item>
          <Menu.Item as="a">Dashboard</Menu.Item>
          <Menu.Item as="a">Settings</Menu.Item>
          <Menu.Item as="a">Profile</Menu.Item>
          <Menu.Item as="a">Help</Menu.Item>
        </Menu.Menu>
      </Menu>
    </Grid>
  );
};

export default Header;
