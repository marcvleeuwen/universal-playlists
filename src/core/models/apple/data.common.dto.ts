export interface DataCommonDto {
	id: string;
	type: string;
	href: string;
	attributes: {
		name: string;
		url: string;
	};
}
