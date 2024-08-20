import Car from './Car';
import { getBookings } from '@/hooks/getBookings';
import { carsForRent } from '../../../../data';

const ModelPage = async ({
	params,
}: {
	params: { vehicleId: string };
}) => {
	const vehicleId = params.vehicleId;

	// TODO: get the bookings for the vehicleId. Date ranges?
	const bookings = await getBookings(vehicleId);
	const getBookedDateRanges = () => {
		const vehicleBookings = bookings.filter(
			booking => booking.vehicleId === Number(vehicleId)
		);

		if (vehicleBookings.length > 0) {
			return vehicleBookings.map(booking => ({
				startDate: booking.startDate,
				endDate: booking.endDate,
			}));
		}

		return [];
	};

	const bookedDateRanges = getBookedDateRanges();

	// TODO: actually get the car from the vehicleId. What do we do if the car is not found?
	const car = carsForRent[0];

	return (
		<Car
			car={car}
			bookedDateRanges={bookedDateRanges || []}
		/>
	);
};

export default ModelPage;
