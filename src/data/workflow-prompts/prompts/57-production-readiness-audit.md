57 — PRODUCTION READINESS & RELIABILITY AUDIT

Act as a senior site reliability engineer auditing this codebase for
production readiness. Treat this as a pre-launch or pre-scale review.

Audit:

1) Configuration
   - environment-specific configs
   - secrets management
   - unsafe defaults
   - feature flags

2) Error Handling
   - unexpected exceptions
   - timeout and retry policies
   - graceful degradation
   - user-facing errors

3) Logging
   - structured logs
   - correlation IDs
   - sensitive data exposure
   - log levels

4) Monitoring and Alerting
   - key metrics and SLIs
   - dashboards
   - alert thresholds
   - alert fatigue risks

5) Database Reliability
   - migrations
   - backups
   - connection pooling
   - query performance
   - data retention

6) External Dependencies
   - third-party failure handling
   - circuit breakers
   - fallback behavior
   - external API timeouts

7) Security
   - authentication and authorization
   - input validation
   - secrets handling
   - dependency vulnerabilities

8) Availability and Scaling
   - stateless vs stateful services
   - horizontal scaling
   - load balancing
   - rate limiting

9) CI/CD and Deployment
   - automated tests
   - build pipeline
   - rollback capability
   - blue-green or canary deployments

10) Data Safety
    - backup and restore
    - PII handling
    - encryption at rest and in transit
    - data deletion policies

For each issue, provide:

- severity: blocker / major / minor,
- location or area affected,
- a clear explanation,
- a concrete fix.

End with:

- a launch readiness verdict,
- the top ten risks,
- an action plan ordered by priority.

Do not change code. Provide the audit as a report only.
