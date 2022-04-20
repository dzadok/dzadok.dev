import { WebTracerProvider } from "@opentelemetry/sdk-trace-web";
import { getWebAutoInstrumentations } from "@opentelemetry/auto-instrumentations-web";
import { CollectorTraceExporter } from "@opentelemetry/exporter-collector";
import { SimpleSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { ZoneContextManager } from "@opentelemetry/context-zone";
import { B3Propagator } from "@opentelemetry/propagator-b3";

const exporter = new CollectorTraceExporter({});

const provider = new WebTracerProvider();
provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
provider.register({
  contextManager: new ZoneContextManager(),
  propagator: new B3Propagator(),
});

registerInstrumentations({
  instrumentations: [
    getWebAutoInstrumentations({
      // load custom configuration for xml-http-request instrumentation
      "@opentelemetry/instrumentation-xml-http-request": {
        clearTimingResources: true,
      },
    }),
  ],
});
