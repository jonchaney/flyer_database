import React from 'react';
import { Link } from 'react-router-dom';

class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchEvents();
  }

  render() {
    // if (this.props.events) {
    //   return (
    //     <p>Loading...</p>
    //   );
    // } else {
        return (
          <div className="events">
            <ul>
              {this.props.events.map((event, idx) =>
                <li key={idx}>
                  <img height={300} src={event.image_url} />
                </li>
              )}

            </ul>
          </div>
        );
    // }
  }
}

export default Event;