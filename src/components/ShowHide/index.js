import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlinePlusSm} from 'react-icons/hi'

import './index.css'

class ShowHide extends Component {
  state = {resultValue: 'undefined', onAddArg: true, selectValue: 'intial'}

  showAddArgResult = () => (
    <div>
      <button className="button-background" type="button">
        My Arg
      </button>
      <select onChange={this.onChangeValueInMyarg}>
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
      <br />
      <button
        onClick={this.onClickAddArg}
        className="button-background"
        type="button"
      >
        <HiOutlinePlusSm />
        add arg
      </button>
    </div>
  )

  onClickAddArg = () => {
    this.setState({onAddArg: false})
  }

  showAddArg = () => (
    <button
      onClick={this.onClickAddArg}
      className="button-background"
      type="button"
    >
      <HiOutlinePlusSm />
      add arg
    </button>
  )

  values = event => {
    event.preventDefault()
    const resltVale = event.target.value

    switch (resltVale) {
      case 'false':
        return this.setState({resultValue: 'false'})
      case 'true':
        return this.setState({resultValue: 'true'})
      case 'or':
        return this.setState({resultValue: 'true'})
      default:
        return this.setState({resultValue: 'undefined'})
    }
  }

  onChangeValueInSelect = event => {
    event.preventDefault()
    const selectResult = event.target.value

    switch (selectResult) {
      case 'constatnt':
        return this.setState({
          selectValue: 'constatnt',
        })
      case 'argument':
        return this.setState({selectValue: 'argument'})
      case 'false':
        return this.setState({resultValue: 'false'})
      case 'true':
        return this.setState({resultValue: 'true'})
      case 'and':
        return this.setState({selectValue: 'and', resultValue: 'false'})
      case 'or':
        return this.setState({selectValue: 'or', resultValue: 'true'})

      default:
        return ''
    }
  }

  showSelect = () => (
    <>
      <select>
        <option defaultChecked>select...</option>
        <option>constatnt</option>
        <option>argument</option>
        <option>and</option>
        <option>or</option>
      </select>
      <button type="button">
        <AiOutlineClose />
      </button>
    </>
  )

  onClickDelete = () => {
    this.setState({selectValue: 'intial'})
  }

  showConstatnt = () => (
    <>
      <select>
        <option>true</option>
        <option>false</option>
      </select>
      <button type="button" onClick={this.onClickDelete}>
        <AiOutlineClose />
      </button>
    </>
  )

  showArgument = () => (
    <>
      <button className="button-background" type="button">
        My Arg
      </button>
      <select onChange={this.onChangeValueInMyarg}>
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
      <button type="button" onClick={this.onClickDelete}>
        <AiOutlineClose />
      </button>
    </>
  )

  showAnd = () => (
    <div>
      <>
        <select>
          <option>and</option>
          <option>or</option>
        </select>
        <button type="button" onClick={this.onClickDelete}>
          <AiOutlineClose />
        </button>
      </>
      <div>
        <select>
          <option defaultChecked>select...</option>
          <option>constatnt</option>
          <option>argument</option>
          <option>and</option>
          <option>or</option>
        </select>
        <button type="button">
          <AiOutlineClose />
        </button>
      </div>
      <div>
        <select>
          <option defaultChecked>select...</option>
          <option>constatnt</option>
          <option>argument</option>
          <option>and</option>
          <option>or</option>
        </select>
        <button type="button">
          <AiOutlineClose />
        </button>
      </div>
      <div>
        <button type="button">+ add op</button>
      </div>
    </div>
  )

  showOr = () => (
    <div>
      <select>
        <option>and</option>
        <option>or</option>
      </select>
      <br />
      <>
        <button className="button-background" type="button">
          My Arg
        </button>
        <select onChange={this.onChangeValueInMyarg}>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </>
      <button type="button" onClick={this.onClickDelete}>
        <AiOutlineClose />
      </button>
    </div>
  )

  render() {
    const {resultValue, onAddArg, selectValue} = this.state
    return (
      <div className="main-container">
        <img
          className="adMyBrand-img"
          src="https://static.startuptalky.com/2021/04/ADmyBRAND-logo_StartupTalky.jpg"
          alt="img"
        />

        <div className="card">
          <div>
            <form onChange={this.values}>
              <button className="button-background" type="button">
                My Arg
              </button>
              <select onChange={this.onChangeValueInMyarg}>
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
              <br />
              {onAddArg ? this.showAddArg() : this.showAddArgResult()}
            </form>
          </div>
          <br />
          <div>
            <form onChange={this.onChangeValueInSelect}>
              {selectValue === 'intial' ? this.showSelect() : ''}
              {selectValue === 'constatnt' ? this.showConstatnt() : ''}
              {selectValue === 'argument' ? this.showArgument() : ''}{' '}
              {selectValue === 'and' ? this.showAnd() : ' '}
              {selectValue === 'or' ? this.showOr() : ' '}
            </form>
          </div>
          <br />
          <p>Result:{resultValue}</p>
        </div>
      </div>
    )
  }
}
export default ShowHide
