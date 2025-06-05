import { Construct } from "constructs";

export interface KbldImageProps {}

export default class KbldImage extends Construct {
    constructor(scope: Construct, name: string, props: KbldImageProps) {
        super(scope, name);
    }
}
