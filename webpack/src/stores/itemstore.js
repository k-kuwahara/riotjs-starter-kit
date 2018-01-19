// Manages our item data locally, for now.
 const ItemStore = () => {
    riot.observable(this)

    var self = this

    // Could pull this from a server API.
    self.items = [
        { id: 1, title: 'Foobar' },
        { id: 2, title: 'Foobaz' },
        { id: 3, title: 'Barbar' }
    ]

    // Init our list view.
    self.on('item_list_init', () => {
        self.trigger('item_list_changed', self.items)
    })

    // Search our item collection.
    self.on('item_list_search', (txt) => {
        var list = self.items
        if (txt.length > 0)
            list = self.items.filter((el) => {
                if (el.title.toLowerCase().search(new RegExp(txt.toLowerCase())) == -1)
                    return false
                else
                    return true
            })

        self.trigger('item_list_changed', list)
    })

    // Add to our item collection.
    // Could push this to a server API.
    self.on('item_detail_add', (title) => {
        self.items.push({ id: self.items.length+1, title: title })
        self.trigger('item_list_changed', self.items)
    })

    // Pull item for URL route. (id)
    self.on('route_item', (id) => {
        var item = null
        self.items.forEach((el) => {
            if (el.id == id)
                item = el
        })
        self.trigger('item_detail_changed', item)
    })

    // Emit event for add item route.
    self.on('route_item_add', () => {
        self.trigger('item_detail_create')
    })

}

export default ItemStore