package quixotic.personnal.porfolio.authentication;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum Permission {
    ADMIN_READ("admin:read"),
    ADMIN_UPDATE("admin:update"),
    ADMIN_CREATE("admin:create"),
    ADMIN_DELETE("admin:delete"),
    MANAGER_READ("manager:read"),
    MANAGER_UPDATE("manager:update"),
    MANAGER_CREATE("manager:create"),
    MANAGER_DELETE("manager:delete"),
    VISITOR_READ("visitor:read"),
    VISITOR_UPDATE("visitor:update"),
    VISITOR_CREATE("visitor:create"),
    VISITOR_DELETE("visitor:delete")

    ;

    private final String permission;
}
