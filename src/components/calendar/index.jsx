import React from 'React';
import './index.css';

export default class calendar extends React.Component {
    static defaultProps = {
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    };
    
    render() {
        const { years, monthNems, weekDayNames } = this.props;
        return (
            <div className = "calendar">
                 <header>
                    <button>{'<'}</button>

                    <select>
                        {monthNames.map((name, index) =>
                            <option key={name} value={index}>{name}</option>
                        )}
                    </select>

                    <select></select>

                    <button>{'>'}</button>
                 </header>

                 <table>
                     <thead>
                         <tr>

                         </tr>
                     </thead>

                     <tbody>

                     </tbody>
                 </table>
            </div>
        )
    }
}