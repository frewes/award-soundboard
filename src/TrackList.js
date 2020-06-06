import React, { Component } from "react";
import songs from "./songs.json";
import "./App.css";
import Track from "./Track.js";
import { Container, Table, Nav, Navbar, NavItem, NavLink } from "reactstrap";

export default class TrackList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      tab: "cat",
    };
    this.select = this.select.bind(this);
    this.getRow = this.getRow.bind(this);
  }

  pickTab(x) {
    this.setState({ tab: x });
  }

  select(idx) {
    let val = this.state.selected === idx ? "" : idx;
    console.log(this.state.selected);
    this.setState({ selected: val });
  }

  getRow(x, idx) {
    if (x.header) {
      let cn = "header";
      if (x.header.startsWith("Judges")) cn += " judge";
      else if (x.header.startsWith("Robot D")) cn += " design";
      else if (x.header.startsWith("Robot P")) cn += " performance";
      else if (x.header.startsWith("Core")) cn += " core";
      else if (x.header.startsWith("Project")) cn += " project";
      else if (x.header.startsWith("Champions")) cn += " champ";
      return (
        <tr className={cn} key={songs.indexOf(x)}>
          <td colSpan="3">{x.header}</td>
        </tr>
      );
    } else {
      return (
        <Track
          track={x}
          key={songs.indexOf(x)}
          selectable={
            this.state.selected === "" ? true : x.title === this.state.selected
          }
          onSelect={() => this.select(x.title)}
        />
      );
    }
  }

  sortString(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  render() {
    let lst = songs;
    if (this.state.tab === "title")
      lst = songs
        .filter((x) => !x.header)
        .filter((x) => x.copyright)
        .sort((a, b) => this.sortString(a.title, b.title));
    else if (this.state.tab === "artist")
      lst = songs
        .filter((x) => !x.header)
        .filter((x) => x.copyright)
        .sort((a, b) => this.sortString(a.artist, b.artist));
    else if (this.state.tab === "royaltyfree")
      lst = songs.filter((x) => !x.header).filter((x) => !x.copyright);

    return (
      <Container>
        <Navbar>
          <Nav pills>
            <NavItem>
              <NavLink>Display format:</NavLink>
            </NavItem>
            <NavItem onClick={() => this.pickTab("cat")}>
              <NavLink active={this.state.tab === "cat"}>Categories</NavLink>
            </NavItem>
            <NavItem onClick={() => this.pickTab("title")}>
              <NavLink active={this.state.tab === "title"}>Title A-Z</NavLink>
            </NavItem>
            <NavItem onClick={() => this.pickTab("artist")}>
              <NavLink active={this.state.tab === "artist"}>Artist A-Z</NavLink>
            </NavItem>
            <NavItem onClick={() => this.pickTab("royaltyfree")}>
              <NavLink active={this.state.tab === "royaltyfree"}>
                Royalty Free
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Table dark>
          <tbody>
            {lst.map((x, idx) => {
              return this.getRow(x, idx);
            })}
          </tbody>
        </Table>
      </Container>
    );
  }
}
