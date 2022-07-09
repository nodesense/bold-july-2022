import {connect} from 'react-redux'
import ReduxCartList from '../components/ReduxCartList'

export const mapStateToProps = (state) => {
    console.log("**ReduxCartList mapStateToProps", state)
    return {
        // only data to be passed here, not functions
        items: state.cart.items,

    }
}

// nothing to dispatch, mapDispatchToProps set to null
  
export default  connect(mapStateToProps, null) (ReduxCartList)
 