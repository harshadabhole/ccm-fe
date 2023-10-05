import React, { Component } from "react";
import { Scrollbars } from "rc-scrollbars";

export class CustomScrollbars extends Component {
  render() {
    console.log("props", this.props);
    return (
      <Scrollbars
        // onScroll={this.handleScroll}
        // onScrollFrame={this.handleScrollFrame}
        // onScrollStart={this.handleScrollStart}
        // onScrollStop={this.handleScrollStop}
        // onUpdate={this.handleUpdate}
        // renderView={this.renderView}
        // renderTrackHorizontal={this.renderTrackHorizontal}
        // renderTrackVertical={this.renderTrackVertical}
        // renderThumbHorizontal={this.renderThumbHorizontal}
        // renderThumbVertical={this.renderThumbVertical}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        // autoHeightMin={0}
        autoHeightMax={this.props.height}
        thumbMinSize={30}
        universal={true}
        {...this.props}
      />
    );
  }
}
