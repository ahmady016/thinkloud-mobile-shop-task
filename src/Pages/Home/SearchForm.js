import React from 'react'

import { useHistory } from 'react-router'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { store } from '../../_redux_store'
import { searchMobiles } from '../../_redux_store/mobiles'
import { BRANDS } from '../../_helpers/constants'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'
import Alert from '@material-ui/lab/Alert'

import styled from 'styled-components'
const SearchFormContainer = styled.div`
	margin: 1rem 0;
`

const schema = yup.object().shape({
	model: yup.string().required(),
	brand: yup.string().required(),
})

function SearchForm() {
	const history = useHistory()
	const goToAddMobile = React.useCallback((e) => history.push('/add-mobile'), [
		history,
	])

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			model: '',
			brand: '',
		},
		resolver: yupResolver(schema),
	})
	const onSubmit = (values) => {
		console.log('🚀: onSubmit => values', values)
		store.dispatch(searchMobiles(values))
	}

	return (
		<SearchFormContainer>
			<Typography variant="h5">Search Mobiles</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid container spacing={3}>
					<Grid item md={9} xs={12}>
						<Controller
							name="model"
							control={control}
							render={({ field }) => (
								<FormControl fullWidth>
									<TextField {...field} label="Model" />
								</FormControl>
							)}
						/>
						{errors.model && (
							<Alert severity="error">{errors.model.message}</Alert>
						)}
						<Controller
							name="brand"
							control={control}
							render={({ field }) => (
								<FormControl fullWidth>
									<InputLabel>Brand</InputLabel>
									<Select {...field}>
										{BRANDS.map((brand) => (
											<MenuItem key={brand} value={brand}>
												{brand}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							)}
						/>
						{errors.brand && (
							<Alert severity="error">{errors.brand.message}</Alert>
						)}
					</Grid>
					<Grid item md={3} xs={12}>
						<div className="w-100 h-100 mt-05 flex-column-around">
							<Button
								type="button"
								variant="outlined"
								color="secondary"
								fullWidth
								startIcon={<AddIcon />}
								onClick={goToAddMobile}
							>
								Add New Mobile
							</Button>
							<Button
								type="submit"
								variant="outlined"
								color="primary"
								fullWidth
								startIcon={<SearchIcon />}
							>
								Search
							</Button>
						</div>
					</Grid>
				</Grid>
			</form>
		</SearchFormContainer>
	)
}

export default SearchForm
