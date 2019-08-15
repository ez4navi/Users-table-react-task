import React from 'react';

export default ({person}) => (
    <div>
        <p>Выбранный пользователь </p> <b>{person.firstName}</b> <b>{person.lastName}</b>
        <p>
            Описание:
            <br/>
            <textarea readOnly value={person.description} />
        </p>
        <p>Адрес проживания: <b>{person.address.streetAddress}</b></p>
        <p>Город: <b>{person.address.city}</b></p>
        <p>Провинция/штат: <b>{person.address.state}</b></p>
        <p>Индекс: <b>{person.address.zip}</b></p>
    </div>
)