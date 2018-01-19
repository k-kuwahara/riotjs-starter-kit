<itemlist>
  <h3>{ opts.title }</h3>

  <ul>
    <li each={ items } >{ this.name }</li>
  </ul>

  <script>
    this.items = [];

    this.on('mount', () => {
      RiotControl.trigger(riot.EVT.loadItems);
    });

    RiotControl.on(riot.EVT.loadItemsSuccess, items => {
      this.items = items;
      this.update()
    });
  </script>
</itemlist>