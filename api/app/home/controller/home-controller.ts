
import HomeModel, { HomeInterface } from './../model/home-model'
import homeModel from './../model/home-model'

class HomeController {

    async save(home: HomeInterface) : Promise<HomeInterface> {
        return await home.save()
    }

    async get() : Promise<[HomeInterface]> {
        return await homeModel.find() as [HomeInterface]
    }

    async delete(home: HomeInterface) : Promise<HomeInterface> {
        return await home.remove()
    }
}

export default HomeController