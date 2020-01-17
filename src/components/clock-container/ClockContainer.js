import React, {Component} from 'react';
import './ClockContainer.scss';
import BoxTime from "../box-time/BoxTime";
import BoxDay from "../box-day/BoxDay";


class ClockContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeNew: {
                hours: 0,
                minutes: 0,
                seconds: 0,
                noonState: '',
            },
            date: this.getDay(),
            countClick: 0
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() =>
            this.getTime(), 50
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    //time update
    getTime() {
        const time = new Date();
        //set time hours, minutes and second
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const noonState = hours <= 12 ? 'AM' : 'PM';
        const timeNew = {hours, minutes, seconds, noonState};
        this.setState({
            timeNew
        })
    }

//get day today
    getDay() {
        const newDate = new Date();
        const day = newDate.getDate();
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear();
        const date = {day, month, year};
        return date
    }

    //toggleCount
    toggleCount = () => {
        let countClick = this.state.countClick;
        if (countClick === 0) {
            this.setState({countClick: countClick + 1})
        } else {
            this.setState({countClick: countClick - 1});
        }
    };
    //view our clock or date
    renderTable = () => {
        switch (this.state.countClick) {
            case 0:
                return <BoxTime time={this.state.timeNew}/>;
            case 1:
                return (
                    <div>
                        <BoxDay date={this.state.date}/>
                    </div>
                );
            default:
                return null;
        }
    };

    render() {
        return (
            <div className='ClockContainer' onClick={this.toggleCount}>
                {this.renderTable()}
            </div>
        )
    }
}

export default ClockContainer;

/*4 типа - просто время с секундами, полная дата , дата с стринг месяцем и время без секунд*/