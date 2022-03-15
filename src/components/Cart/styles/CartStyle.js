const cartStyles = {
  container: {
    position: 'fixed',
    width: 400,
    backgroundColor: 'lightseagreen',
    paddingBlock: 20
  }
}

const cartItemStyles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingInline: 10,
    borderBottom: '1px solid black'
  },
  image: {
    width: 50,
    height: 50,
    objectFit: 'cover'
  }
}

export {
  cartStyles,
  cartItemStyles
}
