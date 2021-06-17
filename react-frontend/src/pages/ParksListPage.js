import React from 'react';
import ParkList from '../components/ParkList';
import parklist from './park-list';

const ParksListPage = () => (
    <div className="bg-secondary mh-100 mw-100">
        <h1>Parks</h1>
        <ParkList parks={parklist} />
    </div>
);

export default ParksListPage;