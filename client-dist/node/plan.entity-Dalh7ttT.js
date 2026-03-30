//#region modules/mod/shared/entities/plan.entity.ts
var Plan = class {
	static TRIGGER_PREFIX = "zbackups:plans";
	id;
	name;
	description;
	config;
	valid;
	active;
	strategy;
	strategy_label;
	strategy_fields;
	strategy_fields_sections;
	triggers;
	created_at;
	updated_at;
	constructor(data) {
		Object.assign(this, data);
	}
};
//#endregion
export { Plan as t };
