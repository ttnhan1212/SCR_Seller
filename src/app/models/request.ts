import { Timestamp } from 'rxjs';

export class Request {
	id: string;
	uuid: string;
	name: string;
	vehicle_id: string;
	effectiveTime: Date;
	expireDate: Date;
}
