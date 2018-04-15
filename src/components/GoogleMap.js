import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: this.props.defaultZoom,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    });
  }

  render() {
    return (
      <div ref="map">
        {/* Map will be rendered here */}
      </div>
    )
  }
}

export default GoogleMap;