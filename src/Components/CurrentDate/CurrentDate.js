import React from 'react';

class CurrentDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }
        this.initDate = this.initDate.bind(this)
    }

    // Assign the current date to the state of the component
    initDate() {
        const date = new Date();
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

        let currentMonth;

        // Assign a month string based on the current month
        months.forEach((month, i) => {
            if (i === date.getMonth()) {
                currentMonth = month;
            }
        });

        this.setState({
            date: {
                day: date.getDate(),
                month: currentMonth,
                year: date.getFullYear()
            }
        })
    }

    // Call the date initiation function when component mounts on the DOM
    componentDidMount() {
        this.initDate()
    }


    render() {
        return (
            <div>
                <p>
                    {this.state.date.day} {this.state.date.month} {this.state.date.year}
                </p>
            </div>
        );
    }
}

export default CurrentDate;