import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';
import fetchCurrency from "../../common/actions";
import LoadingPage from "../../components/Loading";
import EmptyPage from "../../components/EmptyPage";
import { SB_PURPLE, SB_WHITE, SB_DANGER_RED } from '../../utils/constants/StyleConstants';
import { isEmpty } from '../../utils/objects/';

const Wrapper = styled.div`
	margin: 25px auto;
`;
const HeaderWrapper = styled.div`
  background: ${SB_PURPLE};
  color: ${SB_WHITE};
  font-weight: bold;
  font-size: 16px;
  padding: 10px 20px 10px 20px;
  text-align: center;
  border: 1px solid #e0e0e0;
  margin: 0 auto;
  max-width: 1080px;
  border-radius: 5px 5px 0 0;
  position: relative;
  width: 50%;
  @media (max-width: 768px) {
    padding: 10px 8px 10px 8px;
    width: 100%;
  }
`;
const ContentWrapper = styled.div`
  background: #fff;
  padding: 5px 20px 30px 20px;
  border: 1px solid #e0e0e0;
  margin: 0 auto;
  max-width: 1080px;
  border-radius: 0 0 5px 5px;
  position: relative;
  width: 50%;
  @media (max-width: 768px) {
    padding: 5px 15px 30px 15px;
    width: 100%;
  }
`;
const TitleContentWrapper = styled.div`
	margin-top: 5px;
	font-size: 16px;
	font-style: italic;
`;
const BoxContentWrapper = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin: 5px 0;
`;
const TitleCurrency = styled.div`
	width: 50%;
	float: left;
`;
const Currency = styled.div`
	width: 50%;
	float: right;
`;
const BoxWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid ${SB_PURPLE};
  border-radius: 5px;
  padding: 10px;
`;
const CurrencyDetailInfo = styled.div`
	float: left;
	width: 80%;
	padding: 5px;
`;
const ActionCurrencyRemove = styled.div`
	float: right;
	margin: 0 auto;
  padding: 25px 0;
`;
const TitleRates = styled.div`
	font-size: 20px;
	float: left;
`;
const PriceRates = styled.div`
	font-size: 20px;
	float: right;
`;
const CurrencyAbbreviation = styled.div`
	font-size: 16px;
	font-weight: bold;
	font-style: italic;
	padding: 0 5px;
`;
const ForeignCurrencyWrapper = styled.div`
	font-size: 16px;
	font-style: italic;
`;
const ErrorWrapper = styled.div`
	margin: 5px 0;
	color: ${SB_DANGER_RED};
`;
const NoteWrapper = styled.div`
	margin: 10px;
`;
class ForeignCurrency extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
    	rates: {},
      currency: [
      	{ initial: 'AUD', desc: 'Australian Dollar' },
      	{ initial: 'CAD', desc: 'Canadian Dollar' },
				{ initial: 'IDR', desc: 'Indonesian Rupiah' },
				{ initial: 'GBP', desc: 'British Pound' },
				{ initial: 'CHF', desc: 'Swiss Franc' },
				{ initial: 'SGD', desc: 'Singapore Dollar' },
				{ initial: 'INR', desc: 'Indian Rupee' },
				{ initial: 'MYR', desc: 'Malaysian Ringgit' },
				{ initial: 'JPY', desc: 'Japanese Yen' },
				{ initial: 'KRW', desc: 'South Korean Won' },
			],
			currencyAdd: [
      	{ initial: 'HRK', desc: 'Kuna Kroasia' },
      	{ initial: 'TRY', desc: 'Lira Turki' },
				{ initial: 'DKK', desc: 'Krona Denmark' },
				{ initial: 'RUB', desc: 'Rubel Rusia' },
				{ initial: 'NOK', desc: 'Krona Norwegia' },
			],
			value: '',
			showAddCurrencies: true,
			ratesList: [],
			errorAdd: '',
    }
  }
  componentDidMount() {
		this.props.fetchCurrency()
		.then((result) => {
			this.getRates(result.data.rates);
		});
	}
	getRates = (rates) => {
		const data = [];
		let ratesList = '';
		Object.entries(rates).forEach((key) => {
			const currency = this.state.currency.find((items) => items.initial === `${key[0]}`);
			if (currency !== undefined) {
				ratesList = {
					currency: key[0],
					rate: key[1],
					desc: currency.desc,
				};
				data.push(ratesList);
			}
		});
		this.setState({ratesList: data});
	};
	handleButtonCurrencies = () => {
		this.setState({showAddCurrencies: false});
	};
	onHandleChange = (evt) => {
    this.setState({value: evt.target.value.toUpperCase()});
	};
	handleAddCurrency = (e) => {
		e.preventDefault();
		this.setState({errorAdd: ''});
		const { currency } = this.props;
		const rates = this.state.ratesList;
		const validate = this.state.currencyAdd.find((items) => items.initial === this.state.value);
		if (validate !== undefined) {
			const val = rates.find((i) => i.currency === this.state.value);
			if (val !== undefined) {
				if (val.currency === this.state.value) {
					this.setState({errorAdd: 'Sorry, data already exists. Please enter another currency code!'});	
				}
			} else {
				Object.entries(currency).forEach((key) => {
					const abbreviation = this.state.currencyAdd.find((items) => items.initial === key[0]);
					if (abbreviation !== undefined) {
						if (abbreviation.initial === this.state.value) {
							rates.push({
								currency: key[0],
								rate: key[1],
								desc: abbreviation.desc,
							});
							this.setState({ratesList: rates});
						}
					}
				});
			}
		} else {
			this.setState({errorAdd: 'Currency you entered is not found, please try again!'});
		}
		this.setState({value: ''});
		this.refs.currency.value = null;
	};
	deleteCurrency = (item) => {
		const data = this.state.ratesList.filter(i => i.currency !== item.currency);
    this.setState({ratesList: data});
  };
	render() {
		const { isFetching } = this.props;
		const isNoData = isEmpty(this.state.ratesList);
		if (isFetching) {
      return <LoadingPage />;
    }
		return (
			<Wrapper>
				<HeaderWrapper>
					Foreign Currency
				</HeaderWrapper>
				<ContentWrapper>
					<TitleContentWrapper>
						USD - United States Dollars
					</TitleContentWrapper>
					<BoxContentWrapper>
						<TitleCurrency>
							USD
						</TitleCurrency>
						<Currency>
							10.0000
						</Currency>
						<div className="clearfix" />
					</BoxContentWrapper>

					{/* list all foreign currency data obtained from the API get that is placed in the state */}
					{!isNoData ?
						this.state.ratesList.map((item, index) => {
							return (
								<BoxWrapper key={index}>
									<CurrencyDetailInfo>
										<TitleRates>
											{item.currency}
										</TitleRates>
										<PriceRates>
											{item.rate}
										</PriceRates>
										<div className='clearfix' />
										<CurrencyAbbreviation>
											{item.currency} - {item.desc}
										</CurrencyAbbreviation>
										<ForeignCurrencyWrapper>
											1 USD = {item.currency} {item.rate}
										</ForeignCurrencyWrapper>
									</CurrencyDetailInfo>

									{/* Button to delete currency */}
									<ActionCurrencyRemove>
										<div className="btn-group">
											<button type="button" className="btn btn-danger" onClick={this.deleteCurrency.bind(this, item)}>
												<span className="glyphicon glyphicon-remove"></span>
											</button>
											</div>
									</ActionCurrencyRemove>
									<div className='clearfix' />
								</BoxWrapper>
							);
						})
						:
						<EmptyPage message="DATA FOREIGN CURRENCY NOT AVAILABLE" />
					}

					{/* Error Message */}
					{this.state.errorAdd ?
						<ErrorWrapper>
							*{this.state.errorAdd}
						</ErrorWrapper>
						: ''
					}

					{/* Button to add new currency data */}
					{this.state.showAddCurrencies ?
						<div className="btn-group" onClick={this.handleButtonCurrencies} style={{ width: '100%' }}>
							<button type="button" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
								<span className="glyphicon glyphicon-plus"></span> Add More Currencies
							</button>
						</div>
						:
						<div>
							<form onSubmit={this.handleAddCurrency}>
								<div className="input-group">
									<input
										ref='currency'
										type="text"
										className="form-control"
										placeholder="Input Currency"
										aria-describedby="basic-addon2"
										value={this.state.value}
										onChange={(e) => this.onHandleChange(e)}
									/>
									<span className="input-group-btn">
										<input className="btn btn-primary" type="submit" value="Submit" />
									</span>
								</div>
							</form>

							{/* List of data to be entered according to the list API GET */}
							<NoteWrapper>
								<p>Note: Please enter the currency code below</p>
								<p>- HRK (Kuna Kroasia)</p>
								<p>- TRY (Lira Turki)</p>
								<p>- DKK (Krona Denmark)</p>
								<p>- RUB (Rubel Rusia)</p>
								<p>- NOK (Krona Norwegia)</p>
							</NoteWrapper>
						</div>
					}
				</ContentWrapper>
			</Wrapper>
	  );
	}
}

const mapStateToProps = (state) => ({
  currency: state.currency.items.data,
  isFetching: state.currency.isFetching,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchCurrency,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ForeignCurrency);
