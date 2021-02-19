import React from 'react';
import './index.css';
import 'App.js';
import * as calendar from './calendar';

export default class calendar extends React.Component {
    static defaultProps = {
        date: new Date(),
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        onChange: Function.prototype
    };
    
    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null
    }

    get year() {
        return this.state.date.getFullYear();
    }
    get month() {
        return this.state.date.getMonth();
    }
    get day() {
        return this.state.date.getDay();
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);
        this.setState({date})
    };
    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);
        this.setState({date})
    };
    handleSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;
        
        const date = new Date(year, month);

        this.setState({date});
    };
    handleDayClick = date => {
        this.setState({selectedDate: date});
        this.props.onChange(date);
    }

    render() {
        const { years, monthNems, weekDayNames } = this.props;

        const monthData = calendar.getMonthData(this.year, this.month);

        return (
            <div className = "calendar">
                 <header>
                    <button onClick={this.handlePrevMonthButtonClick}>{'<'}</button>

                    <select 
                        ref={element => this.monthSelect = element}
                        defaultValue={this.month}
                        onChange={this.handleSelectChange}
                    >
                        {monthNames.map((name, index) =>
                            <option key={name} value={index}>{name}</option>
                        )}
                    </select>

                    <select 
                        ref={element => this.yearSelect = element}
                        defaultValue={this.year}
                        onChange={this.handleSelectChange}
                    >
                        {years.map(year =>
                            <option key={year} value={year}>{year}</option>
                        )}
                    </select>

                    <button onClick={this.handleNextMonthButtonClick}>{'>'}</button>
                 </header>

                 <table>
                     <thead>
                         <tr>
                            {weekDayNames.map(name =>
                                <th key={name}>{name}</th>    
                            )}
                         </tr>
                     </thead>

                     <tbody>
                        {monthData.map((week, index) =>
                            <tr key={index} className="week">
                                {week.map((date, index) => date ?
                                    <td 
                                        key={index} 
                                        className="day" 
                                        onClick={() => this.handleDayClick(date)}
                                    >{data.getDate()}</td>
                                    :
                                    <td key = {index} />
                                )}
                            </tr>
                        )}
                     </tbody>
                 </table>
            </div>
        )
    }
}