import React from 'react'

import { useHistory } from 'react-router'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { nanoid } from 'nanoid'
import { store } from '../../_redux_store'
import { addMobile } from '../../_redux_store/mobiles'

import {
	BRANDS,
	MEMORIES,
	SCREEN_SIZES,
	COLORS,
} from '../../_helpers/constants'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

import Button from '@material-ui/core/Button'

import SaveIcon from '@material-ui/icons/Save'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Alert from '@material-ui/lab/Alert'

import styled from 'styled-components'
const SearchFormContainer = styled.div`
	margin: 1rem 0;
`

const schema = yup.object().shape({
	model: yup.string().required(),
	manufacture_year: yup.number({ min: 2000, max: 2021 }).required(),
	brand: yup.string().required(),
	memory: yup.string().required(),
	color: yup.string().required(),
	screen: yup.string().required(),
	dual_sim: yup.boolean(),
	nfc: yup.boolean(),
	'4g': yup.boolean(),
})

function AddMobile() {
	const history = useHistory()
	const goToHome = React.useCallback((e) => history.push('/home'), [history])

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			model: '',
			manufacture_year: undefined,
			brand: '',
			memory: '',
			color: '',
			screen: '',
			dual_sim: '',
			nfc: '',
			'4g': '',
		},
		resolver: yupResolver(schema),
	})
	const onSubmit = (values) => {
		console.log('🚀: onSubmit => values', values)
		store.dispatch(
			addMobile({
				id: nanoid(),
				...values,
			})
		)
		goToHome()
	}
	return (
		<SearchFormContainer>
			<Typography variant="h5">Add New Mobile</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid container spacing={3} className="w-90 mx-auto">
					<Grid item md={6} xs={12}>
						{/* model */}
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
						{/* year */}
						<Controller
							name="manufacture_year"
							control={control}
							render={({ field }) => (
								<FormControl fullWidth>
									<TextField
										{...field}
										type="number"
										label="Manufacture Year"
									/>
								</FormControl>
							)}
						/>
						{errors.model && (
							<Alert severity="error">
								{errors.manufacture_year.message}
							</Alert>
						)}
						{/* brand */}
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
						{/* memory */}
						<Controller
							name="memory"
							control={control}
							render={({ field }) => (
								<FormControl fullWidth>
									<InputLabel>Memory</InputLabel>
									<Select {...field}>
										{MEMORIES.map((memory) => (
											<MenuItem key={memory} value={memory}>
												{memory}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							)}
						/>
						{errors.memory && (
							<Alert severity="error">{errors.memory.message}</Alert>
						)}
					</Grid>
					<Grid item container md={5} xs={12} className="mt-2 ml-2">
						{/* options */}
						<Grid item md={4} xs={12}>
							<FormControl component="fieldset">
								<FormLabel component="legend">Options</FormLabel>
								<FormGroup fullWidth>
									<FormControlLabel
										control={
											<Controller
												name="dual_sim"
												control={control}
												defaultValue={false}
												render={({ field }) => (
													<Checkbox {...field} />
												)}
											/>
										}
										label="Dual SIM"
									/>
									<FormControlLabel
										control={
											<Controller
												name="nfc"
												control={control}
												defaultValue={false}
												render={({ field }) => (
													<Checkbox {...field} />
												)}
											/>
										}
										label="NFC"
									/>
									<FormControlLabel
										control={
											<Controller
												name="4g"
												control={control}
												defaultValue={false}
												render={({ field }) => (
													<Checkbox {...field} />
												)}
											/>
										}
										label="4G"
									/>
								</FormGroup>
							</FormControl>
						</Grid>
						{/* screen */}
						<Grid item md={4} xs={12}>
							<FormControl component="fieldset">
								<FormLabel component="legend">Screen</FormLabel>
								<Controller
									name="screen"
									control={control}
									render={({ field }) => (
										<RadioGroup {...field}>
											{SCREEN_SIZES.map((size) => (
												<FormControlLabel
													label={`${size}"`}
													value={size}
													control={<Radio />}
												/>
											))}
										</RadioGroup>
									)}
								/>
							</FormControl>
						</Grid>
						{/* color */}
						<Grid item md={4} xs={12}>
							<FormControl component="fieldset">
								<FormLabel component="legend">Color</FormLabel>
								<Controller
									name="color"
									control={control}
									render={({ field }) => (
										<RadioGroup {...field}>
											{COLORS.map((color) => (
												<FormControlLabel
													label={color}
													value={color}
													control={<Radio />}
												/>
											))}
										</RadioGroup>
									)}
								/>
							</FormControl>
						</Grid>
					</Grid>
					{/* buttons */}
					<Grid item xs={12} className="flex-end mt-1">
						<Button
							type="button"
							variant="outlined"
							color="secondary"
							className="w-20 mx-1"
							startIcon={<ArrowBackIcon />}
							onClick={goToHome}
						>
							Back
						</Button>
						<Button
							type="submit"
							variant="outlined"
							color="primary"
							className="w-20 mr-3"
							startIcon={<SaveIcon />}
						>
							Save
						</Button>
					</Grid>
				</Grid>
			</form>
		</SearchFormContainer>
	)
}

export default AddMobile
