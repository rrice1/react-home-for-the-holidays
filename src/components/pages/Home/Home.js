import React from 'react';
import './Home.scss';

class Home extends React.Component {
  changeView = (e) => {
    // const view = e.target.closest('.card').id;
    const view = e.currentTarget.id;
    this.props.history.push(`/${view}`);
  }

  render() {
    return (
      <div className='Home'>
        <div className="card-deck mt-5">
          <div className="card border-dark" id="friends" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 class="card-title"><i className="fas fa-comments fa-7x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">Friends</h6>
              <p className="card-text">Newer better AOL</p>
            </div>
          </div>
          <div className="card border-dark" id='newFriend' onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i className="fas fa-user-friends fa-7x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">New Friends</h6>
              <p className="card-text">Friend List?</p>
            </div>
          </div>
          <div className="card border-dark" id='holidays' onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i className="fas fa-bolt fa-7x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">Holidays</h6>
              <p className="card-text">What is the current weather?</p>
            </div>
          </div>
        </div>
          <div className="card border-dark" id='newHoliday' onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i className="fas fa-calendar-alt fa-7x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">New Holiday</h6>
              <p className="card-text">Upcoming Events</p>
            </div>
          </div>
          </div>
    );
  }
}

export default Home;
