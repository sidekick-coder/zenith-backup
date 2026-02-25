class Snapshot {
  id;
  plan_id;
  data;
  metadata;
  created_at;
  plan;
  constructor(data) {
    Object.assign(this, data);
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
    if (!this.size) {
      return "0 B";
    }
    const i = Math.floor(Math.log(this.size) / Math.log(1024));
    const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    return (this.size / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
  }
}
export {
  Snapshot as S
};
