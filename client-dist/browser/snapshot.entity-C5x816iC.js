//#region modules/mod/shared/entities/snapshot.entity.ts
var e = class {
	id;
	plan_id;
	data;
	metadata;
	created_at;
	plan;
	constructor(e) {
		Object.assign(this, e);
	}
	get description() {
		return this.metadata?.description || "";
	}
	get size() {
		return this.metadata?.size || 0;
	}
	get origin() {
		return this.metadata?.origin || "unknown";
	}
	get trigger_type() {
		return this.metadata?.trigger_type || "unknown";
	}
	get trigger_id() {
		return this.metadata?.trigger_id || null;
	}
	get humanSize() {
		if (!this.size) return "0 B";
		let e = Math.floor(Math.log(this.size) / Math.log(1024));
		return (this.size / 1024 ** e).toFixed(2) + " " + [
			"B",
			"KB",
			"MB",
			"GB",
			"TB",
			"PB",
			"EB",
			"ZB",
			"YB"
		][e];
	}
};
//#endregion
export { e as t };
