import { Pipe, PipeTransform } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Pipe({
	name: 'dateAgo',
	pure: true,
})
export class DateAgoPipe implements PipeTransform {

	justNowText: string;
	agoText: string;
	agosText: string;

	constructor(private translate: TranslateService,) {
		this.translate.get("date_ago_content.just_now").subscribe((res: string) => {
			this.justNowText = res;
		});
		this.translate.get("date_ago_content.ago").subscribe((res: string) => {
			this.agoText = res;
		});
		this.translate.get("date_ago_content.agos").subscribe((res: string) => {
			this.agosText = res;
		});

		this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
			this.translate.get("date_ago_content.just_now").subscribe((res: string) => {
				this.justNowText = res;
			});
			this.translate.get("date_ago_content.ago").subscribe((res: string) => {
				this.agoText = res;
			});
			this.translate.get("date_ago_content.agos").subscribe((res: string) => {
				this.agosText = res;
			});
		});
	}

	transform(value: any, args?: any): any {
		if (value) {
			const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
			if (seconds < 29) {
				// less than 30 seconds ago will show as 'Just now'
				return this.justNowText;
			}

			const intervals = {
				year: 31536000,
				month: 2592000,
				week: 604800,
				day: 86400,
				hour: 3600,
				minute: 60,
				second: 1,
			};

			let counter;
			for (const i in intervals) {
				counter = Math.floor(seconds / intervals[i]);
				if (counter > 0) {
					if (counter === 1) {
						return `${counter} ${i} ${this.agoText}`; // singular (1 day ago)
					} else {
						return `${counter} ${i}${this.agosText}`; // plural (2 days ago)
					}
				}
			}
		}
		return value;
	}
}
