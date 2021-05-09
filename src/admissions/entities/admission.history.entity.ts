import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import {
	CommonEntity,
	LookupValueEntity,
} from "@servicelabsco/nestjs-utility-services";

/**
 * entity definition against the adm_histories table
 * @export
 * @class AdmissionHistoryEntity
 * @extends {CommonEntity}
 */
@Entity("adm_histories")
export class AdmissionHistoryEntity extends CommonEntity {
	@Column()
	start: Date;

	@Column()
	end: Date;

	@Column()
	session: number;

	@Column()
	type_id: number;
	/** all related methods to go below this */

	@ManyToOne(() => LookupValueEntity)
	@JoinColumn({ name: "type_id" })
	type: LookupValueEntity;
}
