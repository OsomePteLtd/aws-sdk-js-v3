// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetConnectionRequest, GetConnectionResponse } from "../models/models_1";
import { de_GetConnectionCommand, se_GetConnectionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConnectionCommand}.
 */
export interface GetConnectionCommandInput extends GetConnectionRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectionCommand}.
 */
export interface GetConnectionCommandOutput extends GetConnectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a connection definition from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetConnectionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetConnectionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetConnectionRequest
 *   CatalogId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   HidePassword: true || false,
 * };
 * const command = new GetConnectionCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectionResponse
 * //   Connection: { // Connection
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     ConnectionType: "JDBC" || "SFTP" || "MONGODB" || "KAFKA" || "NETWORK" || "MARKETPLACE" || "CUSTOM",
 * //     MatchCriteria: [ // MatchCriteria
 * //       "STRING_VALUE",
 * //     ],
 * //     ConnectionProperties: { // ConnectionProperties
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     PhysicalConnectionRequirements: { // PhysicalConnectionRequirements
 * //       SubnetId: "STRING_VALUE",
 * //       SecurityGroupIdList: [ // SecurityGroupIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       AvailabilityZone: "STRING_VALUE",
 * //     },
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     LastUpdatedBy: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConnectionCommandInput - {@link GetConnectionCommandInput}
 * @returns {@link GetConnectionCommandOutput}
 * @see {@link GetConnectionCommandInput} for command's `input` shape.
 * @see {@link GetConnectionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *  <p>An encryption operation failed.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetConnectionCommand extends $Command
  .classBuilder<
    GetConnectionCommandInput,
    GetConnectionCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetConnection", {})
  .n("GlueClient", "GetConnectionCommand")
  .f(void 0, void 0)
  .ser(se_GetConnectionCommand)
  .de(de_GetConnectionCommand)
  .build() {}
