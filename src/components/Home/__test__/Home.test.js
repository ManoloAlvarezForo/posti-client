import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Home from '../Home';

describe('<Home />', () => {
    let wrapper = {}
    beforeAll(() => {
        function mockedCallback() {
            return Promise.resolve([{
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            }])
        }
        const getPostsMock = () => {
            return mockedCallback().then(response => {
                return response
            })
        };
        wrapper = shallow(<Home getPosts={getPostsMock} />);
    })

    it('should works fine', () => {
        expect(wrapper.state().posts).toHaveLength(2);
        wrapper.update();
        const containsSpinner = wrapper.containsMatchingElement(<Home />);
        expect(containsSpinner).toBe(false);
    });

});