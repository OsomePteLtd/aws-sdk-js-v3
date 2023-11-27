// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  CostOptimizationHubClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CostOptimizationHubClient";
import { GetPreferencesRequest, GetPreferencesResponse } from "../models/models_0";
import { de_GetPreferencesCommand, se_GetPreferencesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPreferencesCommand}.
 */
export interface GetPreferencesCommandInput extends GetPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link GetPreferencesCommand}.
 */
export interface GetPreferencesCommandOutput extends GetPreferencesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a set of preferences for an account in order to add account-specific preferences
 *       into the service. These preferences impact how the savings associated with recommendations are
 *       presented—estimated savings after discounts or estimated savings before discounts, for
 *       example.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostOptimizationHubClient, GetPreferencesCommand } from "@aws-sdk/client-cost-optimization-hub"; // ES Modules import
 * // const { CostOptimizationHubClient, GetPreferencesCommand } = require("@aws-sdk/client-cost-optimization-hub"); // CommonJS import
 * const client = new CostOptimizationHubClient(config);
 * const input = {};
 * const command = new GetPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // GetPreferencesResponse
 * //   savingsEstimationMode: "BeforeDiscounts" || "AfterDiscounts",
 * //   memberAccountDiscountVisibility: "All" || "None",
 * // };
 *
 * ```
 *
 * @param GetPreferencesCommandInput - {@link GetPreferencesCommandInput}
 * @returns {@link GetPreferencesCommandOutput}
 * @see {@link GetPreferencesCommandInput} for command's `input` shape.
 * @see {@link GetPreferencesCommandOutput} for command's `response` shape.
 * @see {@link CostOptimizationHubClientResolvedConfig | config} for CostOptimizationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again
 *       later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link CostOptimizationHubServiceException}
 * <p>Base exception class for all service exceptions from CostOptimizationHub service.</p>
 *
 */
export class GetPreferencesCommand extends $Command<
  GetPreferencesCommandInput,
  GetPreferencesCommandOutput,
  CostOptimizationHubClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetPreferencesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostOptimizationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPreferencesCommandInput, GetPreferencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPreferencesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostOptimizationHubClient";
    const commandName = "GetPreferencesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CostOptimizationHubService",
        operation: "GetPreferences",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetPreferencesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPreferencesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPreferencesCommandOutput> {
    return de_GetPreferencesCommand(output, context);
  }
}
