function CategoryManager(state) {
  this.state = state ?? {};

  this.addCategory = ( category ) => ( this.state[category.id] = category );

  this.removeCategory = ( id ) => ( delete this.state[id] );

  this.updateCategory = ( id ) => 
    ( category ) => 
    (
      this.state[id] = category
    );

  this.getCategoryById = ( id ) => ( this.state[id] );

  this.findCategoryByName = ( name ) => (
    Object.values( this.state ).filter( ( category ) => ( category.name.includes( name ) ) )
  )
}

export { CategoryManager };