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
        let hours = this.checkNumber(time.getHours());
        let minutes = this.checkNumber(time.getMinutes());
        let seconds = this.checkNumber(time.getSeconds());
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
        this.toggleBackground();
        if (countClick === 0 || countClick < 3) {
            this.setState({countClick: countClick + 1})
        } else {
            this.setState({countClick: 0});
        }
    };
    toggleBackground = ()=>{
        let rand = Math.round(1 - 0.5 + Math.random() * (7 - 3 + 1));
        const color = ['#d3d896', '#36274c', '#990549', '#d41888', '#0096a7', '#1f693d', '#fe5923'];
        const divContainer = document.querySelector('.ClockContainer');
        divContainer.style.backgroundColor = color[rand];
    };

    //view our clock or date
    renderTable = () => {
        switch (this.state.countClick) {
            case 0:
                return <BoxTime time={this.state.timeNew}/>;
            case 1:
                return <BoxDay date={this.createDate()}/>;
            case 2:
                return <BoxDay date={this.createDate()}/>;
            case 3:
                return <BoxTime time={this.state.timeNew} id={0}/>;
            default:
                return null;
        }
    };

    createDate = () => {
        if (this.state.countClick === 1) {
            let day= this.checkNumber(this.state.date.day);
            let month= this.checkNumber(this.state.date.month);
            let year= this.checkNumber(this.state.date.year);
            return `${day}/${month}/${year}`;
        }else {
            return this.forDate();
        }
    };

    forDate=()=>{
        const monthsArr = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        let day= this.state.date.day;
        let month= this.state.date.month;
        let year= this.state.date.year;
        let dataNew = `${monthsArr[month]}\n ${day}th ${year}`;
        return dataNew;
    };

    checkNumber=(number)=>{
        if (number < 10) {
            return `0${number}`;
        } else {
           return `${number}`;
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