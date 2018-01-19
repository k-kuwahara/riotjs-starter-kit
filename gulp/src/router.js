const router = (page, id) => {
  if (page == 'add')
    RiotControl.trigger('item_add')
  else
    RiotControl.trigger('item', id)
}

export default router
