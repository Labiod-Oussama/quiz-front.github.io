import { useMemo } from "react";
import { useNavigate } from "react-router-dom";


// this hook is used to route to a specific page
export function useRouter() {
    const navigate = useNavigate();
    const router = useMemo(
        () => ({
            back: () => navigate(-1),
            forward: () => navigate(1),
            reload: () => window.location.reload(),
            push: (href: string) => navigate(href),
            replace: (href: string) => navigate(href, { replace: true })
        }),
        [navigate]
    )
    return router
}