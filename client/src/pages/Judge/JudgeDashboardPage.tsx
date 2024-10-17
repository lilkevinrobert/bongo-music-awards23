import JudgeLayout from '../../components/Layout/JudgeLayout'
import BreadcrumbLevel1 from '../../components/Breadcrumbs/BreadcrumbLevel1'
import JudgeSalutations from '../../components/Salutations/JudgeSalutations'
// import ArtistDashboardOptions from '../../components/Options/ArtistDashboardOptions';

const JudgeDashboardPage = () => {
    const isEventActive: boolean = false;
    return (
        <JudgeLayout>
            <div className='md:hidden'>
                <BreadcrumbLevel1 currentPage='home' separator='slash' user='judge' />
            </div>
            <div className="flex w-full flex-col gap-8 md:flex-row">

                <section
                    className={`${isEventActive ? "w-full rounded-tr-3xl bg-zinc-50 md:w-8/12" : "w-full space-y-6"}`}
                >
                    <div className="h-2/6 py-20">
                        <JudgeSalutations />
                    </div>
                    {/* <div className="h-4/6 px-6 py-6">
                        <ArtistDashboardOptions />
                    </div> */}
                </section>
            </div>
        </JudgeLayout>
    )
}

export default JudgeDashboardPage
