import React from 'react'
import styleClasses from './Items.module.css'
import Item from './item/Item'
import axios from 'axios'
import Loader from '../../../ui/loader/Loader'

class Items extends React.Component {
    async componentDidMount() {
        let items = []
        const response = await axios
            .get('https://react-social-network-cb9d8.firebaseio.com/items.json')
        Object.values(response.data).forEach(
            itemsArr => itemsArr.map(item => items.push(item))
        )
        this.props.setItems(items)
        this.props.setItemsLoad(false)
    }

    render() {
        return (
            <div className={styleClasses.Items}>
                {
                    this.props.isLoad
                    ? <Loader />
                    : this.props.items.map(({name, id}) => <Item key={id} name={name} id={id} />)
                }
            </div>
        )
    }
}

export default Items
