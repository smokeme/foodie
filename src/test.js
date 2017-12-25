import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import App from './App';
import MyList from './Components/MyList';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('First Quiz', function () {
    it('App\'s title should be Foodie', function () {
        let app = shallow(<App/>);
        expect(app.find('h1').text()).to.equal('Foodie');
    });
    it('Checking if restaurants key in the State has two objects', function () {
        let app = mount(<App/>);
        expect(app.state().restaurants.length).to.equal(2);
    });
    it('Rendering two objects in MyList by default', function () {
        let app = mount(<App/>);
        expect(app.find('li').length).to.equal(2);
    });
    it('Rendering fake object to MyList and checking output', function () {
        let list = [
            {
                name: "test",
                description: "test",
            }
        ];
        let app = mount(<MyList list={list}/>);
        expect(app.find('li').text()).to.equal('test - test');
        });
});
